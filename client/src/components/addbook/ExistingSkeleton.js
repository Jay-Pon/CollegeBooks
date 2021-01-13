import React from 'react'
import { Steps, Step } from "react-step-builder";
import ExistingStep2 from './ExistingStep2'
import ExistingFinal from './ExistingFinal'

export default function ExistingSkeleton() {
    return (
        <div className='container'>
            <Steps>
                <Step component={ExistingStep2} />
                <Step component={ExistingFinal} />
            </Steps>
        </div>
    )
}