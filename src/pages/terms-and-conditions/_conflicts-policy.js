import React from 'react'
import { Header } from 'components/elements/typography'
import { StyledSection, TncText, StyledHeader } from './_styles'
import { localize } from 'components/localization'

export const ConflictsPolicy = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Summary of the Conflicts policy')}
        </Header>
        <TncText>
            {localize(
                'The Company provides here a summary of the policy that the Company maintains in order to manage conflicts of interest in respect of the duties that the Company owes to clients.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('General')}
        </StyledHeader>
        <TncText>
            {localize(
                "Due to the nature of the Company's business as a trading counterparty, the Company's profits are tied to the net revenue generated by clients through trading. However, the Company aims to establish, maintain, and operate effective organisational and administrative arrangements with a view to taking all reasonable steps to prevent conflicts of interest from constituting or giving rise to a material risk of damage to the interests of clients.",
            )}
        </TncText>
        <TncText>
            {localize(
                'Due to the high degree of risk involved, which could result in the loss of the entire investment, the Company has adequate internal procedures in place to ensure that the client is in all cases treated fairly and that the risk of damage to client interests will be mitigated.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize("The Company's policy")}
        </StyledHeader>
        <TncText>
            {localize(
                "The Company aims to keep a record of the kinds of activity that the Company carries on in which a material conflict could arise or has arisen. The Company also maintains procedures to manage actual or potential conflicts. This includes procedures to maintain appropriate independence among members of the Company's staff who are involved in potentially conflicting activities. Such independence-upholding procedures can be followed, for example, through the operation of information barriers, physical separation of staff, the segregation of duties and responsibilities, and the maintenance of a policy of independence, which requires the Company's staff, when providing services to a client, to act in the best interests of the client and to disregard any conflicts of interest, or in some circumstances, to decline to act for a client or potential client in order to avoid conflicts of interest.",
            )}
        </TncText>
    </StyledSection>
)
