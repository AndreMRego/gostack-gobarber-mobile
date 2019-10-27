import React, { useMemo, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { format } from 'date-fns'
import pt from 'date-fns/locale/pt'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, DateButton, DateText } from './styles'

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false)

  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  )

  function handleOpenPicker(event, date) {
    setOpened(false)
    date && onChange(date)
  }

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <DateTimePicker
          value={date}
          onChange={(event, date) => handleOpenPicker(event, date)}
          minimumDate={new Date()}
          display="spinner"
          mode="date"
        />
      )}
    </Container>
  )
}
