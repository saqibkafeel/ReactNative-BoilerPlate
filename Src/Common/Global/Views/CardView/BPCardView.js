import React, {useEffect, useRef} from 'react';

import RBSheet from 'react-native-raw-bottom-sheet';

function INS_CardView(props) {
  const refRBSheet = useRef(null);

  useEffect(() => {
    refRBSheet !== null && refRBSheet.current.open();
  }, []);
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={
        props.allowOnDragClose !== undefined ? props.allowOnDragClose : true
      }
      closeOnPressMask={true}
      keyboardAvoidingViewEnabled={false}
      height={props.height}
      closeDuration={200}
      openDuration={450}
      onClose={() => props.CloseFunction()}
      customStyles={{
        wrapper: {
          backgroundColor: '#00000030',
          animationType: 'slide',
        },
        container: {
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          paddingBottom: 12,
          animationType: 'slide',
          backgroundColor: '#00000000',
        },
        draggableIcon: {
          height: 0,
          width: 0,
          padding: 0,
          margin: 0,
        },
      }}>
      {React.cloneElement(props.children, {sheetRef: refRBSheet})}
    </RBSheet>
  );
}

export default INS_CardView;
