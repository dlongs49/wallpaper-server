import {ApiProperty} from "@nestjs/swagger";

export class FileDto {
    @ApiProperty({ type: 'File', format: 'binary' })
    file: any;
}
