import { Observable } from "rxjs";
import { Login } from "../login/login";
import { HttpClient} from '@angular/common/http';

export class LoginService {

    constructor(private _http:HttpClient){

    }

    inserirLogin(login:Login) : Observable<Login>{
        return this._http.post<Login>('http://localhost:8080/api/auxiliado/v1', login);
    }
}
