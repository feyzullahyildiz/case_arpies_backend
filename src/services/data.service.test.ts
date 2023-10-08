import { DataService } from "./data.service";

describe("data.service", () => {
    it("getData should return 3 elements", () => {
        const data = DataService.getData();
        expect(data).toHaveLength(3);
    });
    it("getData first element should be URGENT", () => {
        const data = DataService.getData();
        expect(data).toHaveLength(3);
        expect(data[0]).toHaveProperty("priority");
        expect(data[0].priority).toBe("URGENT");
    });
});
