import React from "react";
import LegalPage, { LegalNavigation } from "./LegalPage";

export default function MyDataPage() {
  return (
    <LegalPage>
<header>
    <h1>J42 – My Data</h1>
    <p className="meta"><strong>Last updated:</strong> <time dateTime="2026-10-26">26 October 2026</time></p>
    <p>Request access to or deletion of your Journey 42 (J42) data, including if you no longer have the App installed. J42 is operated by its individual creator using the informal name ChalkStudios, which is not a separate incorporated company.</p>
    <p><strong>Before reporting:</strong> submitting an in-app report permanently deletes your own J42 account and shared history. <a href="#reporting-account-deletion">Read what happens when you report</a>.</p>
  </header>
  <LegalNavigation />
  <hr />

  <section id="delete-account">
    <h2>1. Request Account Deletion</h2>
    <p><strong>In the App:</strong> open <strong>Settings → Delete My Account</strong> and confirm your choice.</p>
    <p><strong>Without the App:</strong> <a href="mailto:chalkboystudios@gmail.com?subject=J42%20Account%20Deletion">email a J42 account deletion request</a> to <a href="mailto:chalkboystudios@gmail.com">chalkboystudios@gmail.com</a> with the subject <strong>J42 Account Deletion</strong>. Include the email associated with your J42 account and state that you want your account and associated personal data deleted. You do not need to reinstall the App.</p>
    <p>Send the request from your account email where possible. If you use an Apple private relay address or cannot access that email, tell us so we can help verify ownership another way. Do not send passwords, sign-in tokens, or payment-card details. We may request information reasonably needed to verify ownership before acting.</p>
    <p>Successful in-app deletion removes the active account as part of that process. Email requests require verification and manual processing. We will confirm completion or explain any further steps or lawful retention, within applicable legal time limits.</p>
  </section>

  <section id="deletion-effects">
    <h2>2. What Deletion Means</h2>
    <ul>
      <li>Your active J42 account, push tokens, and associated activity and chat records are removed.</li>
      <li>If paired, both accounts are unlinked. <strong>Both partners’ records for that partnership are deleted, including game history, daily photos and captions, check-in feelings, gestures and notes, love notes, shared chats, and shared progress.</strong> Your partner’s account remains open.</li>
      <li>Your profile image and uploaded drawings and daily photos associated with the deleted records are scheduled for deletion from file storage. Failed file deletions are retried, so files can remain temporarily after the active account is removed.</li>
      <li>Account deletion cannot be undone. Copies your partner saved outside J42, such as screenshots, are outside our control.</li>
      <li>Abuse reports, including relevant account details, activity content, surrounding messages, and separate copies of photos or drawings, are retained separately where needed for safety investigations, disputes, abuse prevention, or legal obligations. They are not automatically deleted with your account.</li>
      <li>Support correspondence, diagnostic logs, backups, and provider-held records may remain separately. See <a href="/privacy-policy/#data-retention">our retention policy</a> for the purposes and criteria, and contact us to request information about, or review or deletion of, remaining personal data or uploaded content.</li>
    </ul>
    <h3 id="reporting-account-deletion">Reporting and Account Deletion</h3>
    <p><strong>Submitting an in-app report permanently deletes your own J42 account after the report is saved.</strong> This applies when you report your partner’s activity content or a chat message.</p>
    <ul>
      <li>You are unpaired from your partner. Both partners’ shared activity history, including games, daily photos and captions, check-ins, love notes, chats, and shared progress, is deleted. Associated uploaded files are handled through the deletion process described on this page.</li>
      <li>Your partner’s account remains open; submitting a report does not automatically delete their account.</li>
      <li>The report and relevant evidence remain separately for review, subject to the retention criteria in the Privacy Policy. Evidence may include both partners’ activity content, surrounding chat messages, and copies of photos or drawings.</li>
      <li>Account deletion cannot be undone. Signing in again creates a new J42 account and does not restore your deleted account or shared history.</li>
      <li><strong>Reporting and account deletion do not cancel your subscription.</strong> Cancel separately through the store where you subscribed to stop future renewals. Deletion may also end your partner’s shared Premium access.</li>
    </ul>
    <p>You can also raise safety concerns by emailing <a href="mailto:chalkboystudios@gmail.com">chalkboystudios@gmail.com</a>. Sending an email does not automatically trigger the in-app account-deletion process.</p>
    <p>Deleting your J42 account does not delete your sign-in provider’s account or app-store transaction records. Uninstalling the App or logging out does not delete your J42 account.</p>
  </section>

  <section id="subscriptions">
    <h2>3. Cancel Subscriptions Separately</h2>
    <p><strong>Deleting your account or uninstalling J42 does not cancel an auto-renewing subscription.</strong> Cancel through the store where you subscribed to stop future renewals:</p>
    <ul>
      <li><a href="https://apps.apple.com/account/subscriptions">Manage Apple App Store subscriptions</a></li>
      <li><a href="https://play.google.com/store/account/subscriptions">Manage Google Play subscriptions</a></li>
    </ul>
    <p>You may delete your account immediately without waiting for the subscription to expire. Deletion ends access through that account and may end your partner’s shared Premium access. Refund requests are subject to the store’s rules and applicable law.</p>
  </section>

  <section id="export-my-data">
    <h2>4. Access, Copy, or Correct Your Data</h2>
    <p>Email <a href="mailto:chalkboystudios@gmail.com">chalkboystudios@gmail.com</a> with the subject <strong>J42 Data Request</strong>. Specify whether you want access, a copy, correction, or deletion of particular personal data. For a copy, you may request JSON format. We may verify ownership and limit disclosure where necessary to protect another person’s privacy or comply with law.</p>
    <p>For privacy concerns or withdrawal of consent, use the same contact. J42 currently does not offer a separate sensitive-content opt-out that keeps your account open. Account deletion follows the process above, including the stated retention exceptions. These current controls do not limit rights you have under applicable law; contact us so we can assess your request. For details about collection, providers, and your rights, read our <a href="/privacy-policy/">Privacy Policy</a>.</p>
  </section>

  <footer>
    <hr />
    <p>&copy; <span>{new Date().getFullYear()}</span> J42. All rights reserved.</p>
  </footer>
    </LegalPage>
  );
}
