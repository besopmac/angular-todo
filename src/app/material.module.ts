import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';

@NgModule({
    imports: [ BrowserAnimationsModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule ],
    exports: [ BrowserAnimationsModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule ],
})
export class MaterialModule { }
