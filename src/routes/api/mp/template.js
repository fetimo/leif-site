const generateTemplate = ({mp, constituency, postcode, carbonPercent}) => `
Dear ${mp},

${new Date().toLocaleDateString('en-GB')}

My name is << insert name here >> and I’m writing to you today about the prevalent use of fossil fuels in ${constituency}. As I’m sure you’re aware, we’re in a climate emergency and we cannot afford to keep relying on gas, oil and coal. This issue is extremely important to me because I know we can make jobs in ${constituency} and it affects every constituent.

Did you know that in the last 14 days fossil fuels have accounted for ${carbonPercent}% of energy used in ${constituency}? I would like you to investigate why so little renewable energy is being utilised and what you can do to help reverse this.

Please outline the steps you intend to take to address my concerns. If applicable, please escalate my letter to the relevant parliamentarian or department and keep me informed of any progress.

I look forward to hearing your response in due course.

Yours sincerely,
<< Your name >>
<< Full address >>
${postcode}
`;

export default generateTemplate;