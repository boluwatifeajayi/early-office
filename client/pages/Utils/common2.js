export const getcurrentcompany = () =>{
    const currentcompanyStr = sessionStorage.getItem("currentCompany");
    if(currentcompanyStr) return JSON.parse(currentcompanyStr)
    else return null;
}

export const getauthToken = () => {
    return setcurrentcompanySession.getItem("authToken") || null;
}

export const setcurrentcompanySession = (authToken, currentCompany) => {
    sessionStorage.setItem("authToken", authToken);
    sessionStorage.setItem("currentCompany", JSON.stringify(currentCompany));
}

export const removecurrentcompanySession = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("currentCompany");
}