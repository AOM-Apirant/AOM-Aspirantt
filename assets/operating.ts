export const whistleCodes = [
  {
    id: 1,
    code: "0",
    description: `(a) Before starting:
(i) Indication to Loco Pilot of assisting/banking engine that the
Loco Pilot of leading engine is ready to start.
(ii) Acknowledgement by the Loco Pilot of assisting/banking engine
to leading engine.
(iii) Engine ready to leave loco yard or after completing loco work.
(iv) Engine ready to go to Loco Yard.
(b) On run:
(i) Assistance of the other engine not required.
(ii) Acknowledgement of Loco Pilot of assisting/banking engine that
assistance stopped.`,
  },
  {
    id: 2,
    code: "0 0",
    description: `(a) Call for Guard’s signal.
(b) Signals not exchanged by Guard.
(c) Signals not exchanged by station staff`,
  },
  {
    id: 3,
    code: "_ 0",
    description: `(a) Guard to release brakes.
(b) Before starting engine or a train from station/mid-section.
(c) Main line clear after backing into siding`,
  },
];

export const bellCodes = [
  {
    id: 1,
    code: "0",
    indication: "Call attention or attend telephone",
    signalled: "One stroke or beat",
    acknowledged: "One stroke or beat",
  },
  {
    id: 2,
    code: "0 0",
    indication: "Is line clear or line clear enquiry",
    signalled: "Two",
    acknowledged: "Two",
  },
  {
    id: 3,
    code: "0 0 0",
    indication: "Train entering block section",
    signalled: "Three",
    acknowledged: "Three",
  },
]
