export class Event {
  constructor(
    public title: string,
    public desc: string,
    public startTime: Date,
    public endTime: Date,
    public allDay: boolean
  ) {}
}
