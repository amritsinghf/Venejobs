export const Routes = {
  home: "/",
  client: {
    home:"/client",
    chat:"/client/chat/"
  },
  job_post: {
    home: "/client/jobpost/",
    form: "/client/jobpost/forms/",
  },
  freelancer: {
    get_started: "/freelancer",
    page: "/freelancer/home",
  },
  profile: {
    client:{
      home: "/profile/client",
      info: "/profile/client/Info",
      bill: "/profile/client/Bill",
    },
    freelancer: {
      home: "/profile/freelancer",
      info: "/profile/freelancer/Info",
      billing: "/profile/freelancer/BillingPage",
    },
  },
};
