import Profile from "./Profile";

export default class Context {
    public profile: Profile;

    constructor(
        profile: Profile
    ) {
        this.profile = profile;
    }
}