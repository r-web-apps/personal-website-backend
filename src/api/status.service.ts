import {Injectable} from "@nestjs/common";

@Injectable()
export class StatusService {
    myTest(): Status {
        return new Status("Test OK");
    }
}

export class Status {
    constructor(status: string) {
        this.status = status;
    }

    status: string;
}