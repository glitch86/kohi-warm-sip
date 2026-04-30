export type Testimonial = {
  _id?: string; // or ObjectId if using mongoose
  username: string;
  profession: string;
  testimony: string;
  pfpUrl: string;
};