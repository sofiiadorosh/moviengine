import { TruncateDescriptionPipe } from "./truncate-description.pipe";

describe("TruncateDescriptionPipe", () => {
  it("create an instance", () => {
    const pipe = new TruncateDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
