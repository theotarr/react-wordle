import { Switch } from '@headlessui/react'
import classnames from 'classnames'
import { useState } from 'react'

type Props = {
  settingName: string
  flag: boolean
  handleFlag: Function
  description?: string
}

export const SettingsToggle = ({
  settingName,
  flag,
  handleFlag,
  description,
}: Props) => {
  const [enabled, setEnabled] = useState(flag)

  function handleToggle() {
    setEnabled(!enabled)
    handleFlag(!flag)
  }

  return (
    <Switch.Group
      as="div"
      className="flex items-center justify-between gap-4 py-4"
    >
      <span className="flex flex-grow flex-col">
        <Switch.Label
          as="span"
          className={`text-left text-sm font-medium text-gray-900 dark:text-gray-100 ${
            description ? '' : '-mt-1' // center setting name if there is no description
          }`}
          passive
        >
          {settingName}
        </Switch.Label>
        <Switch.Description
          as="span"
          className="text-left text-sm text-gray-500 dark:text-gray-400"
        >
          {description}
        </Switch.Description>
      </span>
      <Switch
        checked={enabled}
        onChange={() => handleToggle()}
        className={classnames(
          enabled ? 'bg-blue-700' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        )}
      >
        <span
          aria-hidden="true"
          className={classnames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
    </Switch.Group>
  )
}
