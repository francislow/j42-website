import React from "react";
import LegalPage, { LegalNavigation } from "./LegalPage";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage>
<header>
    <h1>J42 – Privacy Policy</h1>
    <p className="meta"><strong>Last updated:</strong> <time dateTime="2026-10-26">26 October 2026</time></p>
    <p>This policy explains how the individual creator of J42, using the name ChalkStudios (“we,” “us,” or “our”), collects, uses, shares, and protects personal data when you use Journey 42 (“J42” or the “App”). ChalkStudios is an informal name used by the creator, not a separate incorporated company. The individual creator is responsible for the personal data processing described in this policy.</p>
    <p>For privacy questions or requests, contact <a href="mailto:chalkboystudios@gmail.com">chalkboystudios@gmail.com</a>. This policy explains our practices; it does not replace any consent that applicable law requires us to obtain separately.</p>
    <p><strong>Before reporting:</strong> submitting an in-app report permanently deletes your own J42 account and shared history. <a href="#reporting-account-deletion">Read what happens when you report</a>.</p>
  </header>
  <LegalNavigation />
  <hr />

  <section id="summary">
    <h2>1. Overview</h2>
    <p>J42 helps partners connect through questions, games, daily photos, check-ins, love notes, and shared conversations. We use personal data to operate these features, personalise the experience, manage subscriptions, understand usage, and address safety and support issues. We do not sell or rent your personal data.</p>
  </section>

  <section id="information-we-collect">
    <h2>2. Information We Collect</h2>
    <h3>2.1. Account and partner information</h3>
    <p>We collect an account identifier, your sign-in provider and its account identifier, email address, name or nickname, profile image, account dates, and notification and marketing preferences. Supported sign-in providers include Apple, Google, and Facebook where available. The information received depends on the provider and your settings. We store a partner code and, when you link accounts, the partner relationship and linking date.</p>
    <h3>2.2. Personalisation, shared activities, and conversations</h3>
    <p>We store your selected relationship stage, connection goals, and topic preferences; answers, guesses, drawings, comments, and chat messages; daily photos and their captions; check-in feelings, selected gestures, and notes; and love notes and their selected prompts. We also store message read status, submission and reveal timestamps, favourites, activity history, shared streaks and progress, rewards, energy, and coins.</p>
    <p>Photos, notes, answers, and conversations may reveal sensitive information, including information about health, sex life, sexual orientation, beliefs, or relationships. Choose carefully what you share and respect other people’s privacy when including them in photos or messages. You can choose not to answer any question you are uncomfortable with. You can also choose whether to take part in an activity; a feature may require particular content, such as a photo and caption, to work.</p>
    <p>We receive information directly from you, from your sign-in provider, from your linked partner through shared activities or reports, and automatically through use of the App. When you choose to upload an image, we process the image you select or capture. Camera access is requested when you choose to take a photo; device permissions and controls apply.</p>
    <h3>2.3. Purchases and subscriptions</h3>
    <p>We process account-linked purchase and subscription information, such as subscription status, entitlement, and expiry, to provide Premium access and restore purchases. Apple or Google handles payment details; we do not receive your full payment-card details.</p>
    <h3>2.4. Device, usage, and diagnostic information</h3>
    <p>We process device and app information, usage events, diagnostic and error information, service logs, and push notification tokens. Analytics may be linked to your account identifier, pairing status, Premium status, and an identifier connecting the two accounts in a couple. Error reports may be linked to your account identifier. These records are not necessarily anonymous.</p>
    <h3>2.5. Reports, support, and feedback</h3>
    <p>We collect information you submit in support requests, feedback, and abuse reports. Depending on the reported activity, a report can include both users’ account identifiers and emails, the reason and explanation, reported content, both partners’ game responses, copies of drawings or daily photos, captions, check-in feelings and gestures, notes, and relevant surrounding chat messages. Report evidence can include content from both partners, not only the item selected for reporting. These copies are stored separately from ordinary activity and chat records and are not automatically erased when an account is deleted.</p>
  </section>

  <section id="how-we-use-your-information">
    <h2>3. How We Use Your Information</h2>
    <ul>
      <li>Authenticate accounts, link partners, and provide shared games, daily photos, check-ins, love notes, conversations, progress, and rewards.</li>
      <li>Personalise questions and features using your selected preferences and activity history.</li>
      <li>Validate purchases, manage subscriptions, and provide shared Premium benefits.</li>
      <li>Understand feature usage, diagnose errors, and maintain reliability and security.</li>
      <li>Deliver service communications and push notifications, subject to device permissions and available preferences.</li>
      <li>Send promotional emails when you opt in.</li>
      <li>Handle support requests, investigate reports and misuse, enforce our terms, and meet legal obligations.</li>
    </ul>
    <p>We do not use the content of your answers, photos, drawings, notes, or messages for AI processing or training, research, advertising, or developing or improving question content. This is separate from the usage analytics described in this policy. Access by the operator to user content is limited to operating the service, handling support, and investigating reports.</p>
  </section>

  <section id="partner-linking">
    <h2>4. Partner Linking and Sharing</h2>
    <p>Only share your partner code with the person you want to link with. Entering a valid code links eligible accounts without a separate in-app acceptance step from the code owner. Do not use another person’s code without their permission.</p>
    <p>Your linked partner can see information needed for shared features, including your display name, profile image, game responses, daily photos and captions, check-in feelings and gestures, love notes, and activity comments as revealed through the relevant features, as well as chats, read status, and shared progress. Shared Premium access can also indicate that one partner has a subscription. Your partner may keep screenshots or other copies outside J42 that we cannot delete.</p>
    <p>The current App does not offer a standalone unlink control. Deleting your account ends the link and removes the shared activity history, chats, and progress for both partners, while leaving your partner’s account open. <strong>The current in-app report flow also deletes the reporting user’s own account after saving the report.</strong> See Section 6 before deleting or submitting an in-app report.</p>
  </section>

  <section id="data-sharing">
    <h2>5. Providers and Other Disclosures</h2>
    <p>We use providers to support the following functions. Data shared depends on the feature you use and the services enabled for your version of the App:</p>
    <ul>
      <li><strong>Hosting and database infrastructure:</strong> processing and storage of account information, shared activities, messages, and other service records.</li>
      <li><strong>AWS:</strong> storage and delivery of uploaded profile images, drawings, daily photos, and separate image copies retained as report evidence.</li>
      <li><strong>Apple, Google, and Facebook:</strong> supported sign-in services; Apple and Google also process app-store purchases.</li>
      <li><strong>RevenueCat:</strong> purchase validation, subscription management, and account-linked entitlements.</li>
      <li><strong>Amplitude:</strong> usage analytics, including account identifiers, pairing and Premium status, couple grouping, and interaction events.</li>
      <li><strong>Sentry:</strong> error reporting and diagnostics, including an account identifier when signed in.</li>
      <li><strong>Expo and platform push services:</strong> delivery of notifications using push tokens and notification payloads.</li>
    </ul>
    <p>If you contact us by email or visit our external UserJot feedback board, the relevant email or feedback service also processes the information you submit. External services have their own privacy policies. Content posted to a public feedback board may be visible to others; do not post private conversations or account credentials there.</p>
    <p>We may access reported content and share relevant information with providers or advisers assisting with support, security, or legal matters. We may also disclose information when required by law or when necessary and permitted by law to protect people, investigate misuse, or establish or defend legal claims.</p>
  </section>

  <section id="data-retention">
    <h2>6. Retention and Account Deletion</h2>
    <p>We retain personal data while needed for the purposes described in this policy. The applicable criteria depend on the type of record:</p>
    <ul>
      <li><strong>Account and shared activity records:</strong> retained to provide your account, activity history, conversations, and progress while you use J42, subject to account deletion as described below.</li>
      <li><strong>Abuse reports and evidence:</strong> retained separately where needed to investigate safety incidents, prevent abuse, resolve disputes, or meet legal obligations. Relevant criteria include whether an investigation or dispute remains open and whether a continuing safety or legal need exists.</li>
      <li><strong>Support correspondence and diagnostic records:</strong> retention depends on the support issue, reliability or security purpose, and any applicable recordkeeping requirement.</li>
      <li><strong>Backups and provider-held records:</strong> deletion from the active service does not necessarily erase these copies at the same time. Their handling depends on the applicable backup cycle, provider process, and lawful retention requirements.</li>
    </ul>
    <p>These criteria do not permit indefinite retention without an ongoing purpose or legal requirement. Contact us to request information about, access to, or review or deletion of remaining personal data, including records held by providers on our behalf.</p>
    <p>You can delete your account through <strong>Settings → Delete My Account</strong>, or request deletion by email without installing or signing in to the App. Instructions are on <a href="/my-data/">My Data</a>. Email requests require verification and manual processing; we will respond within applicable legal time limits.</p>
    <p><strong>Account deletion cannot be undone.</strong> Successful in-app deletion removes your active account record, push tokens, and associated activity and chat records. If linked, it unlinks the accounts and removes both partners’ records for that partnership, including game responses, daily photos and captions, check-in feelings, gestures and notes, love notes, shared chats, and shared progress. Your partner’s account remains open.</p>
    <p>Your profile image and uploaded drawings and daily photos associated with the deleted records are scheduled for deletion from file storage. We attempt file deletion after removing the database records and retry failed attempts. Files can therefore remain in storage temporarily after your active account is deleted. Separate report-evidence copies and any backup or provider-held records are handled under the criteria above.</p>
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
    <p>We cannot delete screenshots or other copies your partner saved outside J42. Deleting a J42 account does not delete your Apple, Google, or Facebook account or the app store’s transaction records. <strong>It does not cancel a paid subscription.</strong> Manage cancellation separately through the store where you subscribed.</p>
  </section>

  <section id="marketing-consent">
    <h2>7. Your Preferences</h2>
    <p>Promotional emails are opt-in. You can change your marketing preference under <strong>Settings → Email</strong> or contact <a href="mailto:chalkboystudios@gmail.com">chalkboystudios@gmail.com</a>. Opting out does not stop essential account or service communications.</p>
    <p>You can manage notification categories in the App, notification and camera permissions in your device settings, and personalisation choices in the App. For withdrawal of consent to other processing, contact us. We will explain any effect on features that require the relevant information.</p>
    <p>J42 currently does not offer a separate sensitive-content opt-out that keeps your account open. Account deletion is available as described in Section 6; separately retained report evidence and other lawful retention may still apply. These current controls do not limit rights you have under applicable law. Contact us about a privacy request so we can assess the applicable requirements.</p>
  </section>

  <section id="data-security">
    <h2>8. Security</h2>
    <p>We use safeguards intended to protect personal data against unauthorised access, loss, and misuse. No system is completely secure. Do not treat photos, activity responses, notes, or chats as end-to-end encrypted: the service processes this content, and reported content may be reviewed for safety or support.</p>
  </section>

  <section id="children">
    <h2>9. Age Requirement</h2>
    <p>J42 is intended for people aged 18 or older. We do not knowingly collect personal data from anyone under 18. If you believe an under-18 user has provided personal data, contact <a href="mailto:chalkboystudios@gmail.com">chalkboystudios@gmail.com</a> so we can investigate and arrange appropriate deletion.</p>
  </section>

  <section id="international">
    <h2>10. International Processing</h2>
    <p>J42 is offered to users worldwide. Our providers may process personal data outside your country, where privacy laws may differ. Where Singapore’s Personal Data Protection Act applies to a transfer, we must ensure a standard of protection comparable to that required under that Act, unless a lawful exception applies. Other applicable transfer requirements also continue to apply; use of the App alone does not waive them. Contact <a href="mailto:chalkboystudios@gmail.com">chalkboystudios@gmail.com</a> for information about processing locations and applicable safeguards.</p>
  </section>

  <section id="your-rights">
    <h2>11. Requests and Privacy Rights</h2>
    <p>Depending on applicable law, you may have rights to access or correct personal data, request a copy or deletion, request data portability, withdraw consent, or object to or restrict certain processing. These rights may be subject to lawful exceptions, including protection of another person’s data. Where processing relies on consent, withdrawing it does not affect the lawfulness of processing before withdrawal.</p>
    <p>Contact <a href="mailto:chalkboystudios@gmail.com">chalkboystudios@gmail.com</a>, or follow <a href="/my-data/">My Data</a>, to make a request. We may ask for information reasonably needed to verify that the account is yours. Do not send passwords, sign-in tokens, or payment-card details. We will respond within applicable legal time limits and explain any permitted limitation or additional time needed. You may also raise concerns with the relevant data protection authority, including Singapore’s Personal Data Protection Commission where applicable.</p>
  </section>

  <section id="updates">
    <h2>12. Changes to This Policy</h2>
    <p>We will update the date above when this policy changes. We will communicate significant changes through an in-app notice or email and obtain additional consent where required by law.</p>
  </section>

  <section id="contact">
    <h2>13. Contact</h2>
    <p>J42 is operated by the individual creator of J42, using the name ChalkStudios. For privacy questions, complaints, or data requests, email <a href="mailto:chalkboystudios@gmail.com">chalkboystudios@gmail.com</a> with the subject “J42 Privacy”.</p>
  </section>

  <footer>
    <hr />
    <p>&copy; <span>{new Date().getFullYear()}</span> J42. All rights reserved.</p>
  </footer>
    </LegalPage>
  );
}
