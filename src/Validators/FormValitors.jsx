import React from 'react'

export default function FormValitors(e) {
    let { name, value } = e.target
    switch (name) {
        case "name":
            if (!value || value.length === 0)
                return name + "Field is Mandatory"
            else if (value.length < 3 || value.length > 200)
                return name + "Field Length must be 3-200 Characters"
            else
                return ""
        default:
            return ""
    }
}
