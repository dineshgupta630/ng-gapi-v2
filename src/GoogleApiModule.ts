import {ModuleWithProviders, NgModule, Provider} from "@angular/core";
import {GoogleAuthService} from "./GoogleAuthService";
import {GoogleApiService} from "./GoogleApiService";

@NgModule()
export class GoogleApiModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: GoogleApiModule,
            providers: [
                GoogleAuthService,
                GoogleApiService
            ]
        }
    }
}
