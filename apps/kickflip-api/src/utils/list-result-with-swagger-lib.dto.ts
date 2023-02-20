// eslint-disable-next-line unicorn/prevent-abbreviations
import { ApiProperty } from "@nestjs/swagger"

export class ListResult<Data> {
    @ApiProperty({ type: Array })
    public data: Data[]

    public total: number
}
