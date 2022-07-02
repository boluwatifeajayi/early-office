export const getcurrentStudent = () =>{
    const currentStudentStr = sessionStorage.getItem("currentStudent");
    if(currentStudentStr) return JSON.parse(currentStudentStr)
    else return null;
}

export const getauthToken = () => {
    return setcurrentStudentSession.getItem("authToken") || null;
}

export const setcurrentStudentSession = (authToken, currentStudent) => {
    sessionStorage.setItem("authToken", authToken);
    sessionStorage.setItem("currentStudent", JSON.stringify(currentStudent));
}

export const removecurrentStudentSession = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("currentStudent");
}