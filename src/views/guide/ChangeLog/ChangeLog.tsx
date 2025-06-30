import Container from '@/components/shared/Container'
import type { ReactNode } from 'react'

type Log = {
    version: string
    date: string
    updateContent: string[]
}

type LogProps = Omit<Log, 'updateContent'> & {
    border?: boolean
    children?: ReactNode
}

const logData: Log[] = [
    {
        version: '1.3.2',
        date: '25 Jun 2025',
        updateContent: [
            `[Added] Indeterminate prop to Checkbox component.`,
        ],
    },
    {
        version: '1.3.1',
        date: '22 May 2025',
        updateContent: [
            `[Fixed] Missing no notification image`,
            `[Fixed] Input textarea size issues`,
            `[Added] Slider component.`,
            `[Updated] vite version to 6.3.5`,
        ],
    },
    {
        version: '1.3.0',
        date: '27 Apr 2025',
        updateContent: [
            `[Fixed] Token not being updated in AuthProvider.`,
            `[Fixed] Z-index ordering issues bewteen components Dialog, Drawer, Select & Header.`,
            `[Fixed] pauseOnHover prop not working in InfiniteMovingCards component.`,
            `[Updated] react-router to v7 and replaced with react-router-dom.`,
        ],
    },
    {
        version: '1.2.2',
        date: '03 Apr 2025',
        updateContent: [
            `[Added] JavaScript version of the template.`,
            `[Fixed] Checkbox disabled hover style issues.`,
            `[Fixed] Form inline alignment issues.`,
            `[Fixed] Datepicker component not closing automatically issues.`,
            `[Fixed] Switcher class override issues.`,
        ],
    },
    {
        version: '1.2.1',
        date: '13 Mar 2025',
        updateContent: [
            `[Added] Landing page.`,
            `[Fixed] Datepicker component focus styling issues`,
            `[Fixed] Select component input contrast issues`,
            `[Updated] Various dependencies to their latest versions.`,
        ],
    },
    {
        version: '1.2.0',
        date: '23 Feb 2025',
        updateContent: [
            `[Updated] Tailwind to version 4.`,
            `[Updated] Various dependencies to their latest versions.`,
            `[Changes] Applied layers to existing CSS.`,
            `[Fixed] Minor styling issues`,
        ],
    },
    {
        version: '1.1.2',
        date: '27 Jan 2025',
        updateContent: [
            `[Fixed] Upload item image out of alignment.`,
            `[Fixed] Menu title not showing when cascade level more than one.`,
            `[Fixed] Remove dependency overrides for some library.`,
        ],
    },
    {
        version: '1.1.1',
        date: '08 Jan 2025',
        updateContent: [
            `[Fixed] SideNav menu item not highlighted in collapsed mode.`,
        ],
    },
    {
        version: '1.1.0',
        date: '07 Jan 2025',
        updateContent: [
            `[Updated] React to version 19.`,
            `[Updated] Various dependencies to their latest versions.`,
            `[Fixed] Vertical menu collapsed issue in Mobile view`,
            `[Fixed] Uncovered auth check in VeritcalMenuContent component`,
            `[Fixed] Select option disabled appearance looks identical to the normal state`,
            `[Fixed] Eslint no longer working after upgraded to v9`,
        ],
    },
    {
        version: '1.0.8',
        date: '15 Dec 2024',
        updateContent: [
            `[Updated] Various dependencies to their latest versions.`,
            `[Added] New field 'activeNavTranslation' to app config.tsx to control navigation translation activation.`,
            `[Fixed] Translation key typo and missing translation in demo`,
            `[Fixed] fullWidth prop warning from DatePicker component`,
            `[Changes] Locales module no longer included in starter pack by default.`,
            `[Changes] Rename hook 'useTheme' to 'useThemeSchema'`,
        ],
    },
    {
        version: '1.0.7',
        date: '17 Nov 2024',
        updateContent: [`[Fixed] Extra rerender in PostLoginLayout component`],
    },
    {
        version: '1.0.6',
        date: '08 Nov 2024',
        updateContent: [
            `[Fixed] Missing useDirection hook initialization in Theme component.`,
        ],
    },
    {
        version: '1.0.5',
        date: '01 Nov 2024',
        updateContent: [
            `[Added] OtpInput component.`,
            `[Added] Otp verification auth pages.`,
            `[Fixed] Redundant classes in Button & Pagination components.`,
            `[Fixed] Minor typing issues in DateTable componet.`,
        ],
    },
    {
        version: '1.0.4',
        date: '18 Oct 2024',
        updateContent: [
            `[Fixed] missing .env file in both starter & demo version.`,
            `[Fixed] error message overflows the border when the content is too long in all auth pages.`,
        ],
    },
    {
        version: '1.0.3',
        date: '07 Oct 2024',
        updateContent: [`[Fixed] chart not resize when parent element resize.`],
    },
    {
        version: '1.0.2',
        date: '01 Oct 2024',
        updateContent: [
            `[Fixed] invisible configuration panel in blank layout.`,
        ],
    },
    {
        version: '1.0.1',
        date: '28 Sep 2024',
        updateContent: [
            `[Fixed] token retrieve from localStorage instead of sessionStorage when accessTokenPersistStrategy is 'sessionStorage'.`,
        ],
    },
    {
        version: '1.0.0',
        date: '27 Sep 2024',
        updateContent: ['[Release] Initial Release.'],
    },
]

const Log = (props: LogProps) => {
    return (
        <div className={`py-4 ${props.border && 'border-bottom'}`}>
            <div className="flex items-center">
                <h5 className="font-weight-normal mb-0 mr-3">
                    {props.version}
                </h5>
                <code>{props.date}</code>
            </div>
            <div className="api-container p-0 border-0 mt-3">
                {props.children}
            </div>
        </div>
    )
}

const Changelog = () => {
    return (
        <Container>
            <div>
                <h4>Changelog</h4>
                {logData.map((elm) => (
                    <Log
                        key={elm.version}
                        version={`v${elm.version}`}
                        date={elm.date}
                    >
                        {elm.updateContent.length > 0 ? (
                            <ul>
                                {elm.updateContent.map((item, i) => (
                                    <li key={i}>- {item}</li>
                                ))}
                            </ul>
                        ) : null}
                    </Log>
                ))}
            </div>
        </Container>
    )
}

export default Changelog
