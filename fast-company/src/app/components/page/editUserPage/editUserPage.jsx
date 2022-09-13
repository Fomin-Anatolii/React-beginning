import React, { useEffect, useState } from "react"
import { validator } from "../../../utils/validator"
import TextField from "../../common/form/textField"
import api from "../../../api"
import SelectField from "../../common/form/selectField"
import RadioField from "../../common/form/radioField"
import MultiSelectField from "../../common/form/multiSelectField"

import { useParams, useHistory } from "react-router-dom"

const EditUserPage = () => {
    const history = useHistory()
    const [user, setUser] = useState()
    const [data, setData] = useState()
    const [qualities, setQualities] = useState()
    const [professions, setProfession] = useState()
    const { usersID } = useParams()
    const [errors, setErrors] = useState({})

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                console.log("prof", prof)
                return { _id: prof.value, name: prof.name }
            }
        }
    }
    const getQualities = (elements) => {
        const qualitiesArray = []
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitiesArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color
                    })
                }
            }
        }
        return qualitiesArray
    }
    const getQualitiesArray = (qualities) => {
        return qualities.map((item) => ({
            value: item._id,
            label: item.name,
            color: item.color
        }))
    }

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                name: data[professionName].name,
                value: data[professionName]._id
            }))
            setProfession(professionsList)
        })
        api.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                value: data[optionName]._id,
                label: data[optionName].name,
                color: data[optionName].color
            }))
            setQualities(qualitiesList)
        })
        api.users.getById(usersID).then((data) => {
            setUser(data)
            setData({
                name: data.name,
                email: data.email,
                sex: data.sex,
                profession: data.profession._id,
                qualities: getQualitiesArray(data.qualities)
            })
        })
    }, [])
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        },
        licence: {
            isRequired: {
                message:
                    "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
            }
        }
    }
    useEffect(() => {
        validate()
    }, [data])
    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        const { profession, qualities } = data
        api.users.update(usersID, {
            ...data,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities)
        })
        console.log({
            ...data,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities)
        })

        history.replace(`/users/${usersID}`)
    }

    return (
        <>
            {professions && user && qualities ? (
                <div className="container mt-4 p-4">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 shadow p-4">
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Имя"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                />
                                <TextField
                                    label="Электронная почта"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                />
                                <SelectField
                                    label="Выбери свою профессию"
                                    defaultOption="Choose..."
                                    options={professions}
                                    name="profession"
                                    onChange={handleChange}
                                    value={data.profession}
                                    error={errors.profession}
                                />
                                <RadioField
                                    options={[
                                        { name: "Male", value: "male" },
                                        { name: "Female", value: "female" },
                                        { name: "Other", value: "other" }
                                    ]}
                                    value={data.sex}
                                    name="sex"
                                    onChange={handleChange}
                                    label="Выберите ваш пол"
                                />
                                {console.log(data.qualities, { qualities })}
                                <MultiSelectField
                                    options={qualities}
                                    onChange={handleChange}
                                    defaultValue={data.qualities}
                                    name="qualities"
                                    label="Выберите ваши качества"
                                />
                                <button
                                    className="btn btn-primary w-100 mx-auto"
                                    type="submit"
                                    disabled={!isValid}
                                >
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                "Loading..."
            )}
        </>
    )
}

export default EditUserPage
