import React, { useState, useCallback} from 'react'
import { Modal, Stack, Button } from '@shopify/polaris';
import SelectOptions from './SelectOptions';
import LoadSelectedOption from './LoadSelectedOption';

const OptionsModal = () => {
    const [active, setActive] = useState(false);
    const [checked, setChecked] = useState(false);
  
    const toggleActive = useCallback(() => setActive((active) => !active), []);
  
    const activator = <Button onClick={toggleActive}>Add Options</Button>;
  
    return (
      <div style={{height: '500px'}}>
        <Modal
          large
          activator={activator}
          open={active}
          onClose={toggleActive}
          title="Add customize product options"
          primaryAction={{
            content: 'Apply options',
            onAction: toggleActive,
          }}
          secondaryActions={[
            {
              content: 'Cancel',
              onAction: toggleActive,
            },
          ]}
        >
          <Modal.Section>
            <Stack>
                <SelectOptions />
            </Stack>
            <Stack>
                <LoadSelectedOption />
            </Stack>
          </Modal.Section>
        </Modal>
      </div>
    );
  }

export default OptionsModal
