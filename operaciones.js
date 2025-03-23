const fs = require('fs');

const registrar=(nombre, edad, tipo, color, enfermedad)=>{
    const data={
        nombre: nombre,
        edad: edad,
        tipo: tipo,
        color: color,
        enfermedad: enfermedad
    };
    let datas=[];
    if(fs.existsSync('citas.json')){
        datas= JSON.parse(fs.readFileSync('citas.json'));
    }
    datas.push(data);
    try {
        fs.writeFileSync('citas.json',JSON.stringify(datas));
        console.log("Archivo creado o editado con exito");
    } catch (error) {
        console.log('EL registro no pudo ser creado')
    }
}

const leer=()=>{
    try {
        const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
        let cont=1;
        citas.map((cita=>{
            console.log(cita);
            cont++;
        }))
    } catch (error) {
        console.log(`ALgo fallo y el error es: ${error}`)
    }
}

module.exports={ registrar, leer};