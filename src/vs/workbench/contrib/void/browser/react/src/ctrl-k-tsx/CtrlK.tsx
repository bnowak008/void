/*--------------------------------------------------------------------------------------
 *  Copyright 2025 Glass Devtools, Inc. All rights reserved.
 *  Licensed under the Apache License, Version 2.0. See LICENSE.txt for more information.
 *--------------------------------------------------------------------------------------*/

import { useEffect, useState } from 'react'
import { useIsDark, useSidebarState } from '../util/services.js'
import ErrorBoundary from '../sidebar-tsx/ErrorBoundary.js'
import { CtrlKChat } from './CtrlKChat.js'
import { QuickEditPropsType } from '../../../quickEditActions.js'

export const CtrlK = (props: QuickEditPropsType) => {

	const isDark = useIsDark()

	return <div className={`@@void-scope ${isDark ? 'dark' : ''}`}>
		<ErrorBoundary>
			<CtrlKChat {...props} />
		</ErrorBoundary>
	</div>


}
