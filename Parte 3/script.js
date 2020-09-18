let nombres  = ['Jorge','Isabel','Juan','Pedro','Karina','Jose','Arturo','Rogelio','Bertha'];

function challenge1(){
    let cantBt = prompt("How many buttons do you want?")
    if(cantBt > nombres.length){
        alert("No se puede");
    }else{
        
        for(var i = 0; i < cantBt; i++){
            var tagetDiv = document.getElementById("dummy");
            var newbt = document.createElement("button")
            newbt.textContent = nombres[i];
            tagetDiv.appendChild(newbt);
        }

    }
}

function challenge2(){
    for(var i = 0; i < nombres.length; i++){
        nombres[i] = nombres[i].toLocaleUpperCase();
        console.log(nombres[i]);
    }
}

class Dog{
    constructor(name, raza, color){
        this.name = name;
        this.raza = raza;
        this.color = color;
    }
     printInfo() {
        console.log("Nombre: " + this.name + " De color: " + this.color + ", raza: " + this.raza);    
    }

}
function challenge3(){
    const perro = new Dog("AJ", "Golden Retriever", "Dorado");
    console.log(`El perro se llama ${perro.name}, es de raza ${perro.raza} y es de colo ${perro.color} `);
    const perro2 = new Dog("pepe", "Chihuahua", "negro");
    console.log(`El perro se llama ${perro2.name}, es de raza ${perro2.raza} y es de colo ${perro2.color} `);
    const perro3 = new Dog("junior", "pasto aleman", "negro");
    console.log(`El perro se llama ${perro3.name}, es de raza ${perro3.raza} y es de colo ${perro3.color} `);
    console.log("Aqui empieza el BONUS")
    perro.printInfo();
}
    
