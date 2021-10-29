export const decode = (input) => {
    const output = JSON.parse(atob(input.status.SuccessValue).split("\\n"))
    return output
}