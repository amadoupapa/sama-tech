import Swal from "sweetalert2";


export class Alert {

    static showSuccess(texte:string,duration?:number,titre?:string){
        Swal.fire({
            title: titre ?? '',
            text: texte,
            icon: 'success',
            timer:  duration ?? 10000,
            confirmButtonText: 'OK',
            confirmButtonColor : "#011d7c"
          })  
    }

    static showAlert(texte:string,duration?:number,titre?:string){
        Swal.fire(
            {
              title: titre ?? '',
              text:  texte,
              icon: 'error',
              timer: duration?? 10000,
              confirmButtonText: 'OK',
              confirmButtonColor : "#011d7c"
            }
          )
    }
}