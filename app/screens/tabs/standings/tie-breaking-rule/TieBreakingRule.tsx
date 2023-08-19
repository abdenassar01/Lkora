import { useState } from "react";
import {
	TieBreakingRuleHeading,
	TieBreakingRuleText,
	TieBreakingRuleWrapper,
} from "../styles/Styles";

function TieBreakingRule({ rule }: { rule: string }) {
	const [hideText, setHideText] = useState(true);

	return (
		<TieBreakingRuleWrapper onPress={() => setHideText((prev) => !prev)}>
			<TieBreakingRuleHeading>Tie Breaking Rule</TieBreakingRuleHeading>
			{!hideText && <TieBreakingRuleText>{rule}</TieBreakingRuleText>}
		</TieBreakingRuleWrapper>
	);
}

export default TieBreakingRule;
