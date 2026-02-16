class Profile{
    private user? : User;
    setuser(user : User) : void {
        this.user = user;
    }
}

class User{
    private profile? : Profile;
    setprofile(profile : Profile){
        this.profile = profile;
        profile.setuser(this);
    }
}

// --------------------
// Simple test / demo
// --------------------
function assert(condition: unknown, message: string): void {
    if (!condition) throw new Error(`Assertion failed: ${message}`);
}

const user1 = new User();
const profile1 = new Profile();

user1.setprofile(profile1);

// Private fields are TS-only; runtime check via `as any`.
assert((user1 as any).profile === profile1, "User should reference Profile");
assert((profile1 as any).user === user1, "Profile should reference User");
console.log("one-one association test passed");