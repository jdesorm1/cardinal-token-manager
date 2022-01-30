use anchor_lang::prelude::*;

pub const TIME_INVALIDATOR_SEED: &str = "time-invalidator";
pub const TIME_INVALIDATOR_SIZE: usize = 8 + std::mem::size_of::<TimeInvalidator>(); 
#[account]
pub struct TimeInvalidator {
    pub bump: u8,
    pub expiration: i64,
}
