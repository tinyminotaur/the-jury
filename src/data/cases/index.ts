import type { SeedCase } from "./types";
import { amandaKnox } from "./amanda-knox";
import { amistad } from "./amistad";
import { annaPou } from "./anna-pou";
import { bobbitt } from "./bobbitt";
import { borden } from "./borden";
import { caseyAnthony } from "./casey-anthony";
import { centralPark } from "./central-park";
import { chicagoSeven } from "./chicago-seven";
import { ellsberg } from "./ellsberg";
import { goetz } from "./goetz";
import { holmes } from "./holmes";
import { leopoldLoeb } from "./leopold-loeb";
import { menendez } from "./menendez";
import { ojSimpson } from "./oj-simpson";
import { pistorius } from "./pistorius";
import { rodneyKing } from "./rodney-king";
import { rosenberg } from "./rosenberg";
import { saccoVanzetti } from "./sacco-vanzetti";
import { scopes } from "./scopes";
import { sheppard } from "./sheppard";
import { spector } from "./spector";
import { tinker } from "./tinker";
import { ulbricht } from "./ulbricht";
import { vonBulow } from "./von-bulow";
import { zimmerman } from "./zimmerman";

export type { SeedCase } from "./types";

/**
 * Launch catalog for TIN-469. Ordered by drop_date.
 * Anna Pou stays first (already live); new cases begin 2026-08-01
 * so current beta testing is not disrupted mid-day.
 */
export const SEED_CASES: SeedCase[] = [
  annaPou,
  scopes,
  amistad,
  tinker,
  menendez,
  borden,
  caseyAnthony,
  saccoVanzetti,
  bobbitt,
  ulbricht,
  holmes,
  vonBulow,
  sheppard,
  amandaKnox,
  zimmerman,
  goetz,
  ellsberg,
  chicagoSeven,
  pistorius,
  rodneyKing,
  ojSimpson,
  centralPark,
  leopoldLoeb,
  spector,
  rosenberg,
];
