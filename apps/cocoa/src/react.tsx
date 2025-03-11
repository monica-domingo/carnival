/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import {Button, Calendar, Form, GridList, GridListItem, TextField} from "@carnival/cotton";

// Create React component standard way
function CottonExample() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', margin: '2rem' }}>
            <div>
                <GridList aria-label="Favorite pokemon" selectionMode="multiple">
                    <GridListItem textValue="Charizard">
                        Charizard
                        <Button aria-label="Info">ⓘ</Button>
                    </GridListItem>
                    <GridListItem textValue="Blastoise">
                        Blastoise
                        <Button aria-label="Info">ⓘ</Button>
                    </GridListItem>
                    <GridListItem textValue="Venusaur">
                        Venusaur
                        <Button aria-label="Info">ⓘ</Button>
                    </GridListItem>
                    <GridListItem textValue="Pikachu">
                        Pikachu
                        <Button aria-label="Info">ⓘ</Button>
                    </GridListItem>
                </GridList>
            </div>

            <div>
                <Calendar aria-label="Appointment date" />
                <div style={{ marginTop: '1rem' }} >
                    <Button onPress={() => alert('Hello world!')}>Test Qwik with react component</Button>
                </div>
            </div>

            <div>
                <Form>
                    <TextField name="email" type="email" isRequired />

                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    );
}

// Convert React component to Qwik component
export const Cotton = qwikify$(CottonExample);
