import React, { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Plataforms from '../types/PlataformsType';
import PlataformService from '../services/plataformService';

const plataformService = new PlataformService()

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



export default function SelectPlatform({ selected, setSelected }: any) {

  const [plataforms, setPlataforms] = useState<Plataforms[]>([])

  const [names, setNames] = useState<string[]>([])



  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    try {
      const {
        target: { value },
      } = event;
      var allPlataforms: string[] = []
      var all: any

      let values = typeof value === 'string' ? value.split(',') : value


      plataforms.map((pl) => {
        values.map((ids: string) => {
          ids === pl._id ? allPlataforms.push(pl.title ? pl.title : '') : console.log('no se encuentra')
          all = typeof value === 'string' ? value.split(',') : value
        })
      })
      setNames(allPlataforms)
      setSelected(values);
    } catch (e) {
      console.log('error')
    }
  };

  useEffect(() => {
    let plataformLenght = plataforms?.length

    if (plataformLenght === 0) {
      plataformService.Get().then(res => { setPlataforms(res) })
    }

    console.log(selected)
  })

  return (
    <div>
      <>
        <InputLabel id="demo-multiple-checkbox-label">Plataformas</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => {
            return names.join(', ')
          }}
          MenuProps={MenuProps}
        >
          {plataforms.length > 0 && (
            plataforms?.map((Plataform: Plataforms, key: number) => (
              <MenuItem key={key} value={Plataform._id}>
                <Checkbox checked={selected.indexOf(Plataform._id) > -1} />
                <ListItemText primary={Plataform.title} />
              </MenuItem>
            ))
          )}
        </Select>
      </>
    </div>
  );
}
