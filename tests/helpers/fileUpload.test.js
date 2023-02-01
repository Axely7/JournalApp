import { fileUpload } from "../../src/helpers/fileUpload"
import { v2 as cloudinary } from 'cloudinary'
cloudinary.config({
    cloud_name: 'djryk1fjh',
    api_key: '312437539177765',
    api_secret: 'pPccKD1YdPMXkyP59cCJsgyOvCY',
    secure: true
})




describe('Pruebas en fileUpload', () => { 

    test('Debe de subir el archivo correctamente a cloudinary', async() => { 
        const imageUrl = 'https://images.unsplash.com/photo-1612441804231-77a36b284856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8&w=1000&q=80'
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg')

        const url = await fileUpload(file)
        expect(typeof url).toBe('string');

        const segments = url.split('/');
        // console.log(segments)
        const imageId = segments[segments.length - 1].replace('.jpg', '')
        // console.log(imageId)
        const cloudResp = await cloudinary.api.delete_resources([ 'journal-app/' + imageId], {resource_type: 'image'})
        console.log(cloudResp)
    })

    test('debe de retornar null', async() => { 
        const file = new File([], 'foto.jpg')
        const url = await fileUpload(file);
        expect(url).toBe(null)
    })


 })