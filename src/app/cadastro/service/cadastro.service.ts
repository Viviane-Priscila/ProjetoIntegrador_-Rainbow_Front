import { Observable } from "rxjs";
import { HttpClient} from '@angular/common/http';
import { CadastroComponent } from "../cadastro.component";

export class LoginService {

    constructor(private _http:HttpClient){

    }

    inserirCadastro(cadastro:CadastroComponent) : Observable<Cadastro>{
        return this._http.post<Cadastro>('http://localhost:8080/api/auxiliado/v1', Cadastro);
    }
}
