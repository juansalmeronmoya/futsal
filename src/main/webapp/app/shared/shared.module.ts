import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FutsalSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [FutsalSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [FutsalSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FutsalSharedModule {
  static forRoot() {
    return {
      ngModule: FutsalSharedModule
    };
  }
}
