import React, { useEffect, useState } from "react"
import api from "../../api"
import { validator } from "../../utils/validator"
import CheckboxField from "../common/form/checkboxField"
import MultiSelectField from "../common/form/multiSelectField"
import RadioField from "../common/form/radioField"
import SelectField from "../common/form/selectField"
import TextFiled from "../common/form/textField"

const RegisterForm = () => {
    const [qualities, setQualities] = useState({})
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        license: false
    })
    const [professions, setProfessions] = useState()
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data))
        api.qualities.fetchAll().then((data) => setQualities(data))
    })
    const [errors, setErrors] = useState({})

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const validatorConfig = {
        email: {
            isRequired: { message: "Почта обязательна для заполнения" },
            isEmail: { message: "Email введён некорректно" }
        },
        password: {
            isRequired: { message: "Пароль обязателен для заполнения" },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одну цифру"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        },
        profession: {
            isRequired: { message: "Выбор професии обязателен" }
        },
        license: {
            isRequired: {
                message:
                    "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
            }
        }
    }

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValidButton = Object.keys(errors).length === 0
    useEffect(() => {
        validate()
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextFiled
                label={"Электронная почта"}
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextFiled
                label={"Пароль"}
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <SelectField
                onChange={handleChange}
                options={professions}
                defaultOption="Choose..."
                value={data.profession}
                error={errors.profession}
                label="Выберите профессию"
                name="propfessions"
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                onChange={handleChange}
                value={data.sex}
                name="sex"
                label="Выберите пол"
            />
            <MultiSelectField
                options={qualities}
                onChange={handleChange}
                name="qualities"
                label="Выберите ваши качества"
                defaultValue={data.qualities}
            />
            <CheckboxField
                value={data.license}
                onChange={handleChange}
                name="license"
                error={errors.license}
            >
                Подтвердить <a>лицензионное соглашение</a>
            </CheckboxField>
            <button
                type="submit"
                disabled={!isValidButton}
                className="btn btn-primary w-100 mx-auto"
            >
                Send
            </button>
        </form>
    )
}

export default RegisterForm
