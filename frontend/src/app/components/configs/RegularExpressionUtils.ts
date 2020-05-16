export class RegularExpressionUtils  {

    public static isEmail(email: string) {
        let reg = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        let regExp = new RegExp(reg);
        return regExp.test(email);
    }
}