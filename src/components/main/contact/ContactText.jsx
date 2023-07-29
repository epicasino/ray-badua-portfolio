import EmailLink from "../../icons/EmailLink";
import GitHubLink from "../../icons/GitHubLink";
import LinkedInLink from "../../icons/LinkedInLink";

export default function ContactText() {
  return (
    <div className="contactText container flex flex-col justify-evenly items-center">
      <h1 className="text-8xl contactTextTitle pe-6">
        Contact <br /> Me
      </h1>
      <div className="contactMeIcons" style={{ display: "flex", gap: '1rem' }}>
        <GitHubLink />
        <LinkedInLink />
        <EmailLink />
      </div>
    </div>
  );
}
