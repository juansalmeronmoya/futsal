import { NgModule } from '@angular/core';

import { FutsalSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [FutsalSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [FutsalSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FutsalSharedCommonModule {}
