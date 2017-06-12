/* interface */
interface IDrivable {
    numCarStatus:number;
    drive();
    stop();  
    getPosition():string;
}

/* Car is either moving or idle */
enum carStatus { idle, moving };

/* Class implements IDrivable interface*/
class car implements IDrivable
{
    numCarStatus:number;
    constructor(){
        this.numCarStatus = carStatus.idle;
    }
    public drive()
    {
        this.numCarStatus = carStatus.moving;
    }
    public stop()
    {
        this.numCarStatus = carStatus.idle;
    }
    public getPosition():string
    {
        return("Google API is not implemented so cannot tell exact position of car on this road");    
    }
    public getCarStatus():string
    {
        if(this.numCarStatus == carStatus.idle)
            return("Car is not moving ....  ");    
        else
            return("Car is moving....  ");    
    }
}

/* Object of class car */
var carObject = new car();

/* Start the car */
function CarStart()
{
    carObject.drive();
    (<HTMLInputElement>document.getElementById("lblMessage")).innerHTML = carObject.getCarStatus() + carObject.getPosition();
}  

/* Stop the car */
function CarStop()
{
    carObject.stop();
    (<HTMLInputElement>document.getElementById("lblMessage")).innerHTML = carObject.getCarStatus() + carObject.getPosition();
}

  
