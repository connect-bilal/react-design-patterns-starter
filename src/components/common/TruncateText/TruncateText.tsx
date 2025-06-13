import { Text, Button } from '@components';
import { truncateText } from '@utils';
import { useState } from 'react';

import type { TruncateTextProps } from './TruncateText.types';

const TruncateText = ({ text, limit = 100 }: TruncateTextProps) => {
  const [expanded, setExpanded] = useState(false);
  const { displayText, isTruncated } = truncateText(text, limit, expanded);

  return (
    <Text as='p'>
      {displayText}
      {isTruncated && (
        <Button onClick={() => setExpanded(prev => !prev)} size='sm' className='ml-1'>
          {expanded ? 'Less' : 'More'}
        </Button>
      )}
    </Text>
  );
};

TruncateText.displayName = 'TruncateText';
export default TruncateText;
