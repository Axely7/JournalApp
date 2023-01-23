import { fileUpload } from "../../src/helpers/fileUpload"

describe('Pruebas en fileUpload', () => { 

    test('Debe de subir el archivo correctamente a cloudinary', async() => { 
        const imageUrl = 'https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80'
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg')

        const url = await fileUpload(file)
        expect(typeof url).toBe('string');
    })


 })