/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { useMemo } from 'react';
import * as CottonLib from "@carnival/cotton";

function CottonExample() {
    const items = useMemo(() => [
        { id: '1', name: 'Charizard' },
        { id: '2', name: 'Blastoise' },
        { id: '3', name: 'Venusaur' },
        { id: '4', name: 'Pikachu' },
    ], []);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', margin: '2rem' }}>
            <div>
                {/*// @ts-ignore - WIP: Experiment in progress */}
                <CottonLib.GridList aria-label="Favorite pokemon" selectionMode="multiple">
                    {items.map(item => (
                        // @ts-ignore - WIP: Experiment in progress
                        <CottonLib.GridListItem key={item.id} textValue={item.name}>
                            {item.name}
                            {/*// @ts-ignore - WIP: Experiment in progress*/}
                            <CottonLib.Button aria-label="Info">ⓘ</CottonLib.Button>
                        </CottonLib.GridListItem>
                    ))}
                </CottonLib.GridList>
            </div>
        </div>
    );
}

export const Cotton = qwikify$(CottonExample, { eagerness: 'load' });