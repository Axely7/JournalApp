import { checkingAuthentication } from "../../../src/store/auth/thunks"

describe('Pruebas en AuthThunks', () => { 
    test('debe de invocar el checking credentials', () => { 
        checkingAuthentication()
     })
 })