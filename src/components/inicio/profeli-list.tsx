
import { ProfileCard } from "./profile-card"
import { profiles } from "../../data/profiles"

export function ProfileList() {
  return (
    <div className=" py-11">
      <div className="space-y-8">
        {profiles.map((profile, index) => (
          <ProfileCard key={profile.id} {...profile} isReversed={index % 2 === 0} />
        ))}
      </div>
    </div>
  )
}

