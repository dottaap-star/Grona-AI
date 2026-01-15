"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { GronaLogo } from "@/components/foundations/logo/grona-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";

// Table of contents items
const tableOfContents = [
    { id: "introduction", label: "1. Introduction" },
    { id: "definitions", label: "2. Definitions" },
    { id: "information-collection", label: "3. Information Collection and Use" },
    { id: "data-collected", label: "4. Types of Data Collected" },
    { id: "use-of-data", label: "5. Use of Data" },
    { id: "retention", label: "6. Retention of Data" },
    { id: "transfer", label: "7. Transfer of Data" },
    { id: "disclosure", label: "8. Disclosure of Data" },
    { id: "security", label: "9. Security of Data" },
    { id: "gdpr", label: "10. Your Data Protection Rights under GDPR" },
    { id: "caloppa", label: "11. Your Data Protection Rights under CalOPPA" },
    { id: "ccpa", label: "12. Your Data Protection Rights under CCPA" },
    { id: "service-providers", label: "13. Service Providers" },
    { id: "analytics", label: "14. Analytics" },
    { id: "cicd", label: "15. CI/CD tools" },
    { id: "remarketing", label: "16. Behavioral Re-marketing" },
    { id: "payments", label: "17. Payments" },
    { id: "links", label: "18. Links to Other Sites" },
    { id: "children", label: "19. Children's Privacy" },
    { id: "changes", label: "20. Changes to This Privacy Policy" },
    { id: "contact", label: "21. Contact Us" },
];

const TableOfContents = () => {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = tableOfContents.map((item) => {
                const element = document.getElementById(item.id);
                return { id: item.id, element, top: element?.getBoundingClientRect().top || 0 };
            });

            const current = sections.find((section) => section.top <= 150 && section.top >= -200);
            if (current) {
                setActiveId(current.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 120; // Account for header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <aside className="sticky top-24 hidden lg:block w-64 shrink-0 self-start">
            <nav className="table-of-contents" aria-label="Table of contents">
                <h3 className="text-sm font-semibold text-quaternary mb-4 uppercase tracking-wide">TABLE OF CONTENTS</h3>
                <ul className="flex flex-col gap-2">
                    {tableOfContents.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => handleClick(e, item.id)}
                                className={cx(
                                    "block text-sm text-tertiary hover:text-tertiary_hover transition-colors py-1",
                                    activeId === item.id && "text-brand-secondary font-medium"
                                )}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

const HeaderCentered = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Effective date: 2024-01-01</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Privacy Policy</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">
                        Our Privacy Policy governs your visit to grona.ai, and explains how we collect, safeguard and disclose information that results from your use of our Service.
                        </p>
                </div>
            </div>
        </section>
    );
};

const ContentSectionRichText02 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex gap-8">
                    <TableOfContents />
                    <div className="flex-1 mx-auto prose md:prose-lg md:max-w-180">
                        <h2 id="introduction">1. Introduction</h2>
                        <p>
                            Welcome to <strong>Grona Ltd</strong>. <strong>Grona Ltd</strong> ("us", "we", or "our") operates <strong>grona.ai</strong> (hereinafter referred to as <strong>"Service"</strong>).
                        </p>
                        <p>
                            Our Privacy Policy governs your visit to <strong>grona.ai</strong>, and explains how we collect, safeguard and disclose information that results from your use of our Service.
                        </p>
                        <p>
                            We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
                        </p>
                        <p>
                            Our Terms and Conditions (<strong>"Terms"</strong>) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us (<strong>"agreement"</strong>).
                        </p>

                        <h2 id="definitions">2. Definitions</h2>
                        <p>
                            <strong>SERVICE</strong> means the grona.ai website operated by Grona Ltd.
                        </p>
                        <p>
                            <strong>PERSONAL DATA</strong> means data about a living individual who can be identified from those data (or from those and other information either in our possession or likely to come into our possession).
                        </p>
                        <p>
                            <strong>USAGE DATA</strong> is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).
                        </p>
                        <p>
                            <strong>COOKIES</strong> are small files stored on your device (computer or mobile device).
                        </p>
                        <p>
                            <strong>DATA CONTROLLER</strong> means a natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal data are, or are to be, processed. For the purpose of this Privacy Policy, we are a Data Controller of your data.
                        </p>
                        <p>
                            <strong>DATA PROCESSORS (OR SERVICE PROVIDERS)</strong> means any natural or legal person who processes the data on behalf of the Data Controller. We may use the services of various Service Providers in order to process your data more effectively.
                        </p>
                        <p>
                            <strong>DATA SUBJECT</strong> is any living individual who is the subject of Personal Data.
                        </p>
                        <p>
                            <strong>THE USER</strong> is the individual using our Service. The User corresponds to the Data Subject, who is the subject of Personal Data.
                        </p>

                        <h2 id="information-collection">3. Information Collection and Use</h2>
                        <p>
                            We collect several different types of information for various purposes to provide and improve our Service to you.
                        </p>

                        <h2 id="data-collected">4. Types of Data Collected</h2>
                        <h3>Personal Data</h3>
                        <p>
                            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (<strong>"Personal Data"</strong>). Personally identifiable information may include, but is not limited to:
                        </p>
                        <ol>
                            <li>Email address</li>
                            <li>First name and last name</li>
                            <li>Phone number</li>
                            <li>Address, Country, State, Province, ZIP/Postal code, City</li>
                            <li>Cookies and Usage Data</li>
                        </ol>
                        <p>
                            We may use your Personal Data to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link.
                        </p>

                        <h3>Usage Data</h3>
                        <p>
                            We may also collect information that your browser sends whenever you visit our Service or when you access Service by or through any device (<strong>"Usage Data"</strong>).
                        </p>
                        <p>
                            This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                        </p>
                        <p>
                            When you access Service with a device, this Usage Data may include information such as the type of device you use, your device unique ID, the IP address of your device, your device operating system, the type of Internet browser you use, unique device identifiers and other diagnostic data.
                        </p>

                        <h3>Tracking Cookies Data</h3>
                        <p>
                            We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information.
                        </p>
                        <p>
                            Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags and scripts to collect and track information and to improve and analyze our Service.
                        </p>
                        <p>
                            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                        </p>
                        <p>Examples of Cookies we use:</p>
                        <ol>
                            <li><strong>Session Cookies:</strong> We use Session Cookies to operate our Service.</li>
                            <li><strong>Preference Cookies:</strong> We use Preference Cookies to remember your preferences and various settings.</li>
                            <li><strong>Security Cookies:</strong> We use Security Cookies for security purposes.</li>
                            <li><strong>Advertising Cookies:</strong> Advertising Cookies are used to serve you with advertisements that may be relevant to you and your interests.</li>
                        </ol>

                        <h3>Other Data</h3>
                        <p>
                            While using our Service, we may also collect the following information: sex, age, date of birth, place of birth, passport details, citizenship, registration at place of residence and actual address, telephone number (work, mobile), details of documents on education, qualification, professional training, employment agreements, NDA agreements, information on bonuses and compensation, information on marital status, family members, social security (or other taxpayer identification) number, office location and other data.
                        </p>

                        <h2 id="use-of-data">5. Use of Data</h2>
                        <p>
                            Grona Ltd uses the collected data for various purposes:
                        </p>
                        <ol>
                            <li>to provide and maintain our Service;</li>
                            <li>to notify you about changes to our Service;</li>
                            <li>to allow you to participate in interactive features of our Service when you choose to do so;</li>
                            <li>to provide customer support;</li>
                            <li>to gather analysis or valuable information so that we can improve our Service;</li>
                            <li>to monitor the usage of our Service;</li>
                            <li>to detect, prevent and address technical issues;</li>
                            <li>to fulfil any other purpose for which you provide it;</li>
                            <li>to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;</li>
                            <li>to provide you with notices about your account and/or subscription, including expiration and renewal notices, email-instructions, etc.;</li>
                            <li>to provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information;</li>
                            <li>in any other way we may describe when you provide the information;</li>
                            <li>for any other purpose with your consent.</li>
                        </ol>

                        <h2 id="retention">6. Retention of Data</h2>
                        <p>
                            We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                        </p>
                        <p>
                            We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer time periods.
                        </p>

                        <h2 id="transfer">7. Transfer of Data</h2>
                        <p>
                            Your information, including Personal Data, may be transferred to – and maintained on – computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
                        </p>
                        <p>
                            If you are located outside United Kingdom and choose to provide information to us, please note that we transfer the data, including Personal Data, to United Kingdom and process it there.
                        </p>
                        <p>
                            Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                        </p>
                        <p>
                            Grona Ltd will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other personal information.
                        </p>

                        <h2 id="disclosure">8. Disclosure of Data</h2>
                        <p>
                            We may disclose personal information that we collect, or you provide:
                        </p>
                        <ol>
                            <li>
                                <strong>Disclosure for Law Enforcement.</strong><br />
                                Under certain circumstances, we may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities.
                            </li>
                            <li>
                                <strong>Business Transaction.</strong><br />
                                If we or our subsidiaries are involved in a merger, acquisition or asset sale, your Personal Data may be transferred.
                            </li>
                            <li>
                                <strong>Other cases. We may disclose your information also:</strong>
                                <ol>
                                    <li>to our subsidiaries and affiliates;</li>
                                    <li>to contractors, service providers, and other third parties we use to support our business;</li>
                                    <li>to fulfill the purpose for which you provide it;</li>
                                    <li>for the purpose of including your company's logo on our website;</li>
                                    <li>for any other purpose disclosed by us when you provide the information;</li>
                                    <li>with your consent in any other cases;</li>
                                    <li>if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.</li>
                                </ol>
                            </li>
                        </ol>

                        <h2 id="security">9. Security of Data</h2>
                        <p>
                            The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                        </p>

                        <h2 id="gdpr">10. Your Data Protection Rights under the General Data Protection Regulation (GDPR)</h2>
                        <p>
                            If you are a resident of the European Union (EU) and European Economic Area (EEA), you have certain data protection rights, covered by GDPR. – See more at <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" target="_blank" rel="noopener noreferrer">https://eur-lex.europa.eu/eli/reg/2016/679/oj</a>
                        </p>
                        <p>We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
                        <p>If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at <strong>support@grona.ai</strong>.</p>
                        <p>In certain circumstances, you have the following data protection rights:</p>
                        <ol>
                            <li>the right to access, update or to delete the information we have on you;</li>
                            <li>the right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete;</li>
                            <li>the right to object. You have the right to object to our processing of your Personal Data;</li>
                            <li>the right of restriction. You have the right to request that we restrict the processing of your personal information;</li>
                            <li>the right to data portability. You have the right to be provided with a copy of your Personal Data in a structured, machine-readable and commonly used format;</li>
                            <li>the right to withdraw consent. You also have the right to withdraw your consent at any time where Grona Ltd relied on your consent to process your personal information.</li>
                        </ol>
                        <p>
                            Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not be able to provide Service without some necessary data.
                        </p>
                        <p>
                            You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in the European Economic Area (EEA).
                        </p>

                        <h2 id="caloppa">11. Your Data Protection Rights under the California Online Privacy Protection Act (CalOPPA)</h2>
                        <p>
                            CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require a person or company in the United States (and conceivable the world) that operates websites collecting personally identifiable information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals with whom it is being shared, and to comply with this policy.
                        </p>
                        <p>According to CalOPPA we agree to the following:</p>
                        <ol>
                            <li>users can visit our site anonymously;</li>
                            <li>our Privacy Policy link includes the word "Privacy", and can easily be found on the home page of our website;</li>
                            <li>users will be notified of any privacy policy changes on our Privacy Policy Page;</li>
                            <li>users are able to change their personal information by emailing us at <strong>support@grona.ai</strong>.</li>
                        </ol>
                        <p>
                            <strong>Our Policy on "Do Not Track" Signals:</strong><br />
                            We honor Do Not Track signals and do not track, plant cookies, or use advertising when a Do Not Track browser mechanism is in place. Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.
                        </p>
                        <p>
                            You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.
                        </p>

                        <h2 id="ccpa">12. Your Data Protection Rights under the California Consumer Privacy Act (CCPA)</h2>
                        <p>
                            If you are a California resident, you are entitled to learn what data we collect about you, ask to delete your data and not to sell (share) it. To exercise your data protection rights, you can make certain requests and ask us:
                        </p>
                        <ol>
                            <li>
                                <strong>What personal information we have about you.</strong> If you make this request, we will return to you:
                                <ol>
                                    <li>The categories of personal information we have collected about you.</li>
                                    <li>The categories of sources from which we collect your personal information.</li>
                                    <li>The business or commercial purpose for collecting or selling your personal information.</li>
                                    <li>The categories of third parties with whom we share personal information.</li>
                                    <li>The specific pieces of personal information we have collected about you.</li>
                                    <li>A list of categories of personal information that we have sold, along with the category of any other company we sold it to. If we have not sold your personal information, we will inform you of that fact.</li>
                                    <li>A list of categories of personal information that we have disclosed for a business purpose, along with the category of any other company we shared it with.</li>
                                </ol>
                                <p>Please note, you are entitled to ask us to provide you with this information up to two times in a rolling twelve-month period. When you make this request, the information provided may be limited to the personal information we collected about you in the previous 12 months.</p>
                            </li>
                            <li>
                                <strong>To delete your personal information.</strong> If you make this request, we will delete the personal information we hold about you as of the date of your request from our records and direct any service providers to do the same. In some cases, deletion may be accomplished through de-identification of the information. If you choose to delete your personal information, you may not be able to use certain functions that require your personal information to operate.
                            </li>
                            <li>
                                <strong>To stop selling your personal information.</strong> We don't sell or rent your personal information to any third parties for any purpose. We do not sell your personal information for monetary consideration. However, under some circumstances, a transfer of personal information to a third party, or within our family of companies, without monetary consideration may be considered a "sale" under California law. You are the only owner of your Personal Data and can request disclosure or deletion at any time.
                            </li>
                        </ol>
                        <p>
                            If you submit a request to stop selling your personal information, we will stop making such transfers.
                        </p>
                        <p>
                            Please note, if you ask us to delete or stop selling your data, it may impact your experience with us, and you may not be able to participate in certain programs or membership services which require the usage of your personal information to function. But in no circumstances, we will discriminate against you for exercising your rights.
                        </p>
                        <p>
                            To exercise your California data protection rights described above, please send your request(s) by email: <strong>support@grona.ai</strong>.
                        </p>
                        <p>
                            Your data protection rights, described above, are covered by the CCPA, short for the California Consumer Privacy Act. To find out more, visit the official California Legislative Information website. The CCPA took effect on 01/01/2020.
                        </p>

                        <h2 id="service-providers">13. Service Providers</h2>
                        <p>
                            We may employ third party companies and individuals to facilitate our Service (<strong>"Service Providers"</strong>), provide Service on our behalf, perform Service-related services or assist us in analysing how our Service is used.
                        </p>
                        <p>
                            These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                        </p>

                        <h2 id="analytics">14. Analytics</h2>
                        <p>
                            We may use third-party Service Providers to monitor and analyze the use of our Service.
                        </p>

                        <h2 id="cicd">15. CI/CD tools</h2>
                        <p>
                            We may use third-party Service Providers to automate the development process of our Service.
                        </p>

                        <h2 id="remarketing">16. Behavioral Re-marketing</h2>
                        <p>
                            We may use remarketing services to advertise on third party websites to you after you visited our Service. We and our third-party vendors use cookies to inform, optimise and serve ads based on your past visits to our Service.
                        </p>

                        <h2 id="payments">17. Payments</h2>
                        <p>
                            We may provide paid products and/or services within Service. In that case, we use third-party services for payment processing (e.g. payment processors).
                        </p>
                        <p>
                            We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.
                        </p>

                        <h2 id="links">18. Links to Other Sites</h2>
                        <p>
                            Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
                        </p>
                        <p>
                            We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                        </p>

                        <h2 id="children">19. Children's Privacy</h2>
                        <p>
                            Our Services are not intended for use by children under the age of 18 (<strong>"Child"</strong> or <strong>"Children"</strong>).
                        </p>
                        <p>
                            We do not knowingly collect personally identifiable information from Children under 18. If you become aware that a Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from Children without verification of parental consent, we take steps to remove that information from our servers.
                        </p>

                        <h2 id="changes">20. Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                        <p>
                            We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update "effective date" at the top of this Privacy Policy.
                        </p>
                        <p>
                            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                        </p>

                        <h2 id="contact">21. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us by email: <strong>support@grona.ai</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FooterLarge16 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-8 md:items-center">
                    <GronaLogo className="h-8 w-min shrink-0" />
                    <nav>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
                            {[
                                { title: "Overview", href: "#" },
                                { title: "Features", href: "#" },
                                { title: "Pricing", href: "#" },
                                { title: "Careers", href: "#" },
                                { title: "Help", href: "#" },
                                { title: "Privacy", href: "/privacy" },
                            ].map((item) => (
                                <li key={item.title}>
                                    <Button color="link-gray" size="lg" href={item.href}>
                                        {item.title}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="relative mt-12 flex flex-col justify-between gap-8 pt-8 md:mt-16 md:flex-row md:items-center">
                    <div className="absolute top-0 left-0 h-px w-full bg-border-secondary"></div>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="flex w-full flex-col gap-4 sm:flex-row md:max-w-100"
                    >
                        <Input isRequired id="newsletters-email" name="email" type="email" placeholder="Enter your email" size="md" wrapperClassName="flex-1" />
                        <Button type="submit" size="lg">
                            Subscribe
                        </Button>
                    </Form>
                    <p className="text-md text-quaternary">© {new Date().getFullYear()} Grona Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const PrivacyPolicy = () => {
    return (
        <div className="bg-primary">
            <Header isFloating />

            <HeaderCentered />

            <ContentSectionRichText02 />

            <SectionDivider />

            <FooterLarge16 />
        </div>
    );
};

export default PrivacyPolicy;

