import { type Type, applyDecorators } from "@nestjs/common"
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from "@nestjs/swagger"

import { ListResult } from "./list-result-with-swagger-lib.dto"

export function ApiListResultResponse<Model extends Type>(model: Model) {
    return applyDecorators(
        ApiExtraModels(ListResult),
        ApiExtraModels(model),
        ApiOkResponse({
            description: "Successfully received model list",

            schema: {
                allOf: [
                    {
                        $ref: getSchemaPath(ListResult),
                    },
                    {
                        properties: {
                            data: {
                                type: "array",

                                items: {
                                    $ref: getSchemaPath(model),
                                },
                            },
                        },
                    },
                ],
            },
        })
    )
}
