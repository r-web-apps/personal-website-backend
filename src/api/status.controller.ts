import {Controller, Get} from "@nestjs/common";
import {Status, StatusService} from "./status.service";

@Controller('/status')
export class StatusController {

    constructor(statusService: StatusService) {
        this.statusService = statusService;
    }

    statusService: StatusService;

    @Get()
    getStatus(): Status {
        return this.statusService.myTest();
    }
}